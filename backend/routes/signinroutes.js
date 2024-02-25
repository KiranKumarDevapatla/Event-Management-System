import { addNewUser,
    getUser ,
    getUserWithID,
    UpdateUser,
    deleteUser
} from "../controllers/userControllers";


const routes =(app) => {
    app.route('/users')
    //get end point
.get(getUser)

    //postendpoint
    .post(addNewUser);

    app.route('/user/:UserId')
      .get(getUserWithID)
//update specific 
      .put(UpdateUser)

//delete specific 
      .delete(deleteUser);
}
export default routes