var mongoose = require('mongoose');
mongoose.connect('mongodb://mongoURI', { useNewUrlParser: true })
.then(()=>{
  console.log('connected')
});
