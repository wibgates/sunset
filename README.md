# sunset
# Connect to MLab clusters with easy, add,request, delete, update using sunset one line functions

//Make sure you have an account with MLAB

//Change the follow object to 
{main:"sampleCluster",prefix:"sampleCluster_"} to {main:"mycluseter",prefix:"mycluseter_"}

# Usage

//link the into your head tag
https://assets.cdn.hilmacs.us/js/global/sunset-2.1.0.min.db.js

To save a document to your cluster

# add data to your mlab data cluster
a  = {
      username:data from form or any json data goes here 
     }
b = 'users' ; // document/(table in sql) will be created automatically if it doesnt exit in your cluster, data shall be saved here

//excute this line

sunset.new(a,b); //you are done

//on one line you are done inserting data to your mlab cluster


# update a dcoument in mlab data cluster

//new obj to replace your document
obj = {
      username:'my-new-username',
      password:'my-new-password'
     }

//sunset do the magic
//coll means the collection/table you want to update
//q meand the query on the api string,ie where `q={'username':'old-username'}`
//data/obj means new obj to replace old one

sunset.upd(coll,q,obj)

//incase yo want to update base on oid
//just place it as a parameter

sunset.updById(coll,oid,obj)

//on one line you are done updating data to your mlab cluster
