

// https://www.djamware.com/post/5a0673c880aca7739224ee21/mean-stack-angular-5-crud-web-application-example
const connectionString = "mongodb+srv://admin:admin@eclassycluster-wfo6k.mongodb.net/dbeclassy?retryWrites=true&w=majority";
const mongoose = require("mongoose");

// mongoose.connect(connectionString, { useNewUrlParser: true }).
//     catch(error => handleError(error));

// Or:
(async () => {
    try {
        await mongoose.connect(connectionString, { useNewUrlParser: true });
        // mongoose.connection;

        const Schema = mongoose.Schema;
        const userSchema = new Schema({ category: String });
        const User = mongoose.model('categories', userSchema);

        let newUser = User({
            category: 'Bags'
        });

        // save the user
        newUser.save(function (err) {
            if (err) throw err;
            console.log('User created successfully.');

            User.find({}, function (err, users) {
                if (err) throw err;
    
                console.log(users);
            });
        });

        
    } catch (error) {
        console.log(error);
    }
})();
