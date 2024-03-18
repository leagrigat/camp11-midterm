import { Oval } from 'react-loader-spinner';

function LoadingSpinner() {
  return (
    <div
      className="top-0 flex flex-col items-center justify-center h-screen"
      data-testid="loading-spinner"
    >
      <Oval
        visible={true}
        height="80"
        width="80"
        color="#FFB43A"
        secondaryColor="#363740"
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}

export default LoadingSpinner;
