var searchIndex = {};
searchIndex["tokio_dns"] = {"doc":"This crate offers tools for asynchronous name resolution, and extensions to\n the `tokio_core` crate.","items":[[3,"CpuPoolResolver","tokio_dns","A resolver based on a thread pool.",null,null],[4,"Endpoint","","An Endpoint is a way of identifying the target of a connection.",null,null],[13,"Host","","Endpoint is a host.",0,null],[13,"SocketAddr","","Endpoint is a `SocketAddr`.",0,null],[5,"tcp_connect","","Connect to the endpoint using the default resolver.",null,{"inputs":[{"name":"t"},{"name":"handle"}],"output":{"name":"iofuture"}}],[5,"tcp_connect_with","","Connect to the endpoint using a custom resolver.",null,{"inputs":[{"name":"t"},{"name":"handle"},{"name":"r"}],"output":{"name":"iofuture"}}],[5,"tcp_bind","","Bind to the endpoint using the default resolver.",null,{"inputs":[{"name":"t"},{"name":"handle"}],"output":{"name":"iofuture"}}],[5,"tcp_bind_with","","Bind to the endpoint using a custom resolver.",null,{"inputs":[{"name":"t"},{"name":"handle"},{"name":"r"}],"output":{"name":"iofuture"}}],[5,"udp_bind","","Bind to the endpoint using the default resolver.",null,{"inputs":[{"name":"t"},{"name":"handle"}],"output":{"name":"iofuture"}}],[5,"udp_bind_with","","Bind to the endpoint using a custom resolver.",null,{"inputs":[{"name":"t"},{"name":"handle"},{"name":"r"}],"output":{"name":"iofuture"}}],[11,"eq","","",0,null],[11,"ne","","",0,null],[11,"fmt","","",0,null],[11,"clone","","",0,null],[11,"to_endpoint","std::net::addr","",1,null],[11,"clone","tokio_dns","",2,null],[11,"new","","Create a new CpuPoolResolver with the given number of threads.",2,{"inputs":[{"name":"usize"}],"output":{"name":"self"}}],[11,"resolve","","",2,null],[8,"ToEndpoint","","A trait for objects that can be converted into an Endpoint.",null,null],[10,"to_endpoint","","Create an endpoint from this object.",3,null],[8,"Resolver","","The Resolver trait represents an object capable of\nresolving host names into IP addresses.",null,null],[10,"resolve","","Given a host name, this function returns a Future which\nwill eventually resolve into a list of IP addresses.",4,null]],"paths":[[4,"Endpoint"],[4,"SocketAddr"],[3,"CpuPoolResolver"],[8,"ToEndpoint"],[8,"Resolver"]]};
initSearch(searchIndex);