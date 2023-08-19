import './configuration.scss';

export const Configuration = () => {
  return (
    <div className="Configuration">
      <h1>Documentation</h1>

      <h2>Suggestion</h2>

      <p>For example, the configuration may include:</p>

      <ul>
        <li>The API endpoint URL for each env</li>
        <li>Additional headers provided by nginx (see docker/nginx.conf and Dockerfile)</li>
      </ul>
    </div>
  );
};
