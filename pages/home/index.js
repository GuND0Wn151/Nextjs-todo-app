import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { useUser } from "@auth0/nextjs-auth0/dist/frontend";

function index() {

  const [message, setmessage] = useState("");
  library.add(faPlus);
  const pushdata = () => {
    console.log("hello");
  };
  const { user, error, isLoading } = useUser();

  return (
    <>
      <div className="container">
        <div className="inputbox">
          <div className="inputt">
            <div>
              <h1 className="text-3xl font-bold underline">Hello world!</h1>
              <input
                value={message}
                onChange={(e) => setmessage(e.target.value)}
                id="hmm"
                type="text"
              />
            </div>
            <div>
              <FontAwesomeIcon icon="plus" onClick={pushdata} />
            </div>
          </div>
        </div>
        <div className="container">Hello</div>
      </div>
    </>
  );
}

export default index;
