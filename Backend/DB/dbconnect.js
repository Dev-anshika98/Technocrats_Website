const mongoose = require('mongoose');


mongoose.connect(process.env.DB, {
}).then(() => {
    console.log("DB CONNECTED");
}).catch(() => {
    console.log("DB NOT CONNECTED");
});


