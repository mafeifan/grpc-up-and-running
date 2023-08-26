var PROTO_PATH = __dirname + '/../../proto/product_info.proto';
var grpc = require('grpc');
// proto 文件需要 proto-loader 加载
var protoLoader = require('@grpc/proto-loader');
const {v4: uuidv4} = require('uuid');
let productMap = new Map();

// define proto -> proto-loader -> package define -> proto descriptor -> object

// Suggested options for similarity to existing grpc.load behavior
var packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true
    });
var protoDescriptor = grpc.loadPackageDefinition(packageDefinition);

// The protoDescriptor object has the full package hierarchy
var productInfo = protoDescriptor.ecommerce;

function addProduct(call, callback) {
    var newProduct = call.request;
    var id = uuidv4();
    newProduct.id = id;
    // 存到map里，实际应该存到数据库
    productMap.set(id, newProduct);
    console.log('new product request', JSON.stringify(newProduct))
    // Constructing the output
    var productID = {
        value: id,
    };
    callback(null, productID);
}

function getProduct(call, callback) {
    var productID = call.request;
    if (productMap.has(productID.value)) {
        callback(null, productMap.get(productID.value));
    } else {
        callback({
            code: 400,
            message: "product doesn't exist for the product id: " + productID.value,
            status: grpc.status.NOT_FOUND
        })
    }
}

function getServer() {
    var server = new grpc.Server();
    server.addService(productInfo.ProductInfo.service, {
        addProduct: addProduct,
        getProduct: getProduct
    });
    return server;
}

var server = getServer();
var host = '0.0.0.0:50051'
server.bindAsync(host, grpc.ServerCredentials.createInsecure(), () => {
    server.start()
    console.log('grpc server started, bind addr => ' + host)
})