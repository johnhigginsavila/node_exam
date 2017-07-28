

module.exports = {
	schema: true,
  attributes: {
    vessel:{
        type:'string',
        required:true
    },
    routeId:{
        type:'integer',
        required:true
    },
    port:{
        type:'string',
        required:true
    },
    etd:{
        type:'datetime'
    },
    eta:{
        type:'datetime',
        required:true
    }
  }
};