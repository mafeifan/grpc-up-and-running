## ``OrderManagement`` Service and Client - Java Implementation

### Building and Running Service

In order to build gradle project, Go to ``Java`` project root directory location (samples) and execute
 the following shell command,
```
./gradlew :ch03:order-service:java:server:build
```

In order to run, Go to ``Java`` project root directory location (order-service/java/server) and execute the following
shell command,

```
java -jar build/libs/server.jar
```

### Building and Running Client

In order to build gradle project, Go to ``Java`` project root directory location (inside samples directory) and execute
 the following shell command,
```
./gradlew :ch03:order-service:java:client:build
```

In order to run, Go to ``Java`` project root directory location (order-service/java/client) and execute the following
shell command,

```
java -jar build/libs/client.jar
```

## Postman 演示

### ch03 searchOrders

1对多

```
{
    "value": "Amazon"
}
```

### ch03 updateOrders

多对1

// click send

```json
{
    "description": "qui dolor",
    "destination": "laborum proident esse culpa sit",
    "id": "104",
    "items": [
        "irure in nulla",
        "in dolor laborum labore anim",
        "eu",
        "Lorem enim incididunt dolor occaecat"
    ],
    "price": 100
}
```

// click send

```
{
 "description": "dolor Lorem anim consectetur",
 "destination": "est ullamco in",
 "id": "105",
 "items": [
  "sunt in Ut irure",
  "velit",
  "Excepteur enim dolor veniam"
 ],
 "price": 19758516.29307024
}
```

### ch03 processOrders

多对多

// click send

```json
{
    "value": "105"
}
```

// click send

```json
{
    "value": "106"
}
```

// 返回查询结果