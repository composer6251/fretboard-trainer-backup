import axios from 'axios';

class MessagingService{

    executedMessagingService(){
       
       //console.log("Executed Messaging Service");
       return axios.get('http://localhost:8080/messagingservice');
    }
    executedMessagingServiceBean(){
       
       //console.log("Executed Messaging Service");
        return axios.get('http://localhost:8080/messagingservicebean');
     }
   //   executedMessagingServiceBeanPathVariable(){
       
   //    console.log("Executed Messaging Service");
   //    return axios.get('http://localhost:8080/messagingServiceBean/path-variable/David');
   // }
}

export default new MessagingService();