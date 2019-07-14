# sunset
# Connect to MLab clusters with easy, add,request, delete, update using sunset one line functions

//Make sure you have an account with MLAB

//Change the follow object to 
{main:"hicerp",prefix:"hicerp_"} to {main:"mycluseter",prefix:"mycluseter_"}

# Usage

To save a document to your cluster

# sample data
a  = {
      username:data from form or any json data goes here 
     }
b = 'users' ; // document/(table in sql) will be created automatically if it doesnt exit in your cluster, data shall be saved here

//excute this line

sunset.new(a,b); //you are done

//on one line you are done inserting data to your mlab cluster
