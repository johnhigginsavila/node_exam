module.exports = {
    list:function(req,res,next){
        PortCall.find()
        .then(function(result){
            res.send(200, result);
        }).catch(function(err){
            res.send(500, err);
        })
    },
    find:function(req,res, next){
        PortCall.find()
        .then(getUniqueRouteId)
        .then(permutate)
        .then(function(result){
            console.log(result);
            res.send(200, result);
        }).catch(function(err){
            console.log(err);
            res.send(500, err);
        })
        function permutate(data){
            var promise = new Promise(function(resolve, reject){
                var newData = [];
                data.forEach((item, index, array) => {
                    PortCall.find({ routeId:item.routeId})
                    .then(voyageLoop)
                    .then(function(result){
                        var newObject = {
                            routeId:item.routeId,
                            vessel:item.vessel,
                            route:result.route,
                            listOfVoyage:result.listOfVoyage
                        }
                        newData.push(newObject);
                    }).catch(function(err){
                        console.log(err);
                    })
                })

                setTimeout(function() {
                    resolve(newData);
                }, 500);
            })
            return promise;
        }
    },
    findByDate:function(req, res, next){
         PortCall.find()
         .then(getUniqueRouteId)
         .then(permutate)
        .then(function(result){
            
            res.send(200, result);
            console.log(result);
        }).catch(function(err){
            console.log(err);
            res.send(500, err);
        })

        function permutate(data){
            var promise = new Promise(function(resolve, reject){
                var newData = [];
                data.forEach((item, index, array) => {
                    PortCall.find({ and: [{or:[{etd:{'>':req.body.gtd}}, {etd:null}]}, {or:[{eta:{'<':req.body.gta}},{eta:null}]}], routeId:item.routeId})
                    .then(voyageLoop)
                    .then(function(result){
                        var newObject = {
                            routeId:item.routeId,
                            vessel:item.vessel,
                            route:result.route,
                            listOfVoyage:result.listOfVoyage
                        }
                        newData.push(newObject);
                    }).catch(function(err){
                        console.log(err);
                    })
                })

                setTimeout(function() {
                    resolve(newData);
                }, 500);
            })
            return promise;
        }

    }          
};

function getUniqueRouteId(data){
    var promise = new Promise(function(resolve, reject){
        //Getting unique routeId
        Array.prototype.contains = function(v) {
            for(var i = 0; i < this.length; i++) {
                if(this[i].routeId === v.routeId) return true;
            }
            return false;
        };

        Array.prototype.unique = function() {
            var arr = [];
            for(var i = 0; i < this.length; i++) {
                if(!arr.contains(this[i])) {
                    arr.push(this[i]);
                }
            }
            return arr; 
        }

        var uniqueData = data.unique();
        resolve(uniqueData);

    })
    return promise;
}

function voyageLoop(data){
    var routeData = [];
    var promise = new Promise(function(resolve, reject){
        var listOfVoyage = [];
        while (data.length > 0){
            routeData.push(data[0].port)
            for(var i = 1; i < data.length; i++){
                listOfVoyage.push(data[0].port + " - " +data[i].port)
            }
            console.log(data);
            console.log('----------------');
            data = data.slice(1,data.length);
        }
        var newData = {
            route:routeData,
            listOfVoyage:listOfVoyage
        }
        resolve(newData);
    })
    return promise;
}