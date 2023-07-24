import "./FbPage.css";
import RecentLogins from "../../Components/RecentLogins/RecentLogins.js";
import Form from "../../Components/Sign-upForm/Form.js";

function FbPage() {
  return (
    <div className="FbReplication">
      <div className="FbPage">
        <div class="Components-fb">
          <div class="component1">
            <RecentLogins />
          </div>

          <div class="component2">
            <Form />
          </div>
        </div>
        <div class="label1">
          <p>
            <temp>Create a Page</temp> for a celebrity,brand or business.
          </p>
        </div>
      </div>
    </div>
  );
}

export default FbPage;
