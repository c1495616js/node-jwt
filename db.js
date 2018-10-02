var mongoose = require('mongoose');
mongoose.connect('mongodb://mongoURIssss', { useNewUrlParser: true })
.then(()=>{
  console.log('connected')
});
