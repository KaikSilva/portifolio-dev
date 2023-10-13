import {toast,ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import successSong from "../../assets/song/success.ogg";
import errorSong from "../../assets/song/error.ogg";
import playAlert from "alert-sound-notify";

function ProviderToast(){
    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </>
    );
}

export const Alert = (message , type) => {

    playAlert.content["success"] = [successSong];
    playAlert.content["error"] = [errorSong];
  
    const option = {
      position: "top-right",
      autoClose: 6000*2, //12 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    };
  
    switch (type){
    case "success":
      playAlert("success");
      toast.success(message, option);
      break;
    case "error":
      playAlert("error");
      toast.error(message, option);
      break;
    }
  };
  

export default ProviderToast;