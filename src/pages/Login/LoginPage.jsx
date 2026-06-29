import "./LoginPage.css";
import institutionProfile from "../../branding/institutionProfile";
import brandingVersion from "../../branding/brandingVersion";

function LoginPage() {
  return (
    <div className="login-page">

      <div className="login-left">

        <div className="branding">

          <h1>{institutionProfile.institutionName}</h1>

          <p className="tagline">
            {institutionProfile.tagLine}
          </p>

          <p className="description">
            A Complete ERP Solution for Schools,
            Colleges & Educational Institutions.
          </p>

        </div>

      </div>

      <div className="login-right">

        <div className="login-card">
            <hr />

<p className="footer">
  © 2026 Khaleeqi Technologies
</p>

          <h2>Welcome Back</h2>

          <p className="subtitle">
            Please sign in to continue.
          </p>

          <input
            type="text"
            placeholder="Username"
          />

          <input
            type="password"
            placeholder="Password"
          />

          <button>
            Sign In
          </button>

          <p className="version">

{brandingVersion.version}

</p>

        </div>

      </div>

    </div>
  );
}

export default LoginPage;