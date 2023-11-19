## ``ProductInfo`` Service and Client - Java Implementation

### Building and Running Service

In order to build gradle project, Go to ``Java`` project root directory location (samples) and execute
 the following shell command,
```
./gradlew :ch02:productinfo:java:server:build
```

In order to run, Go to ``Java`` project root directory location (productinfo/java/server) and execute the following
shell command,

```
java -jar build/libs/server.jar
```

### Building and Running Client

In order to build gradle project, Go to ``Java`` project root directory location (inside samples directory) and execute
 the following shell command,
```
./gradlew :ch02:productinfo:java:client:build
```

In order to run, Go to ``Java`` project root directory location (productinfo/java/client) and execute the following
shell command,

```
java -jar build/libs/client.jar
```

### debug  tool

https://github.com/fullstorydev/grpcurl

```bash
brew install grpcurl
```

```bash
# list services
> grpcurl -plaintext 127.0.0.1:50051 list
ecommerce.ProductInfo
grpc.reflection.v1alpha.ServerReflection
 
# list methods
> grpcurl -plaintext 127.0.0.1:50051 list ecommerce.ProductInfo
ecommerce.ProductInfo.addProduct
ecommerce.ProductInfo.getProduct

# Describe method
> grpcurl -plaintext 127.0.0.1:50051 describe  ecommerce.ProductInfo.addProduct
ecommerce.ProductInfo.addProduct is a method:
rpc addProduct ( .ecommerce.Product ) returns ( .ecommerce.ProductID );

# Invoking RPCs

#  call first method, add product
> grpcurl -plaintext -d '{"description": "exercitation in","id": "fugiat proident","name": "aaa","price": 100}' \
    127.0.0.1:50051 ecommerce.ProductInfo/addProduct
# the return value   
{
  "value": "8e93dd86-d9a3-43f0-8c3f-c1cccb1df2d3"
} 

# call the second method
> grpcurl -plaintext -d '{"value": "8e93dd86-d9a3-43f0-8c3f-c1cccb1df2d3"}' \
    127.0.0.1:50051 ecommerce.ProductInfo/getProduct
```

