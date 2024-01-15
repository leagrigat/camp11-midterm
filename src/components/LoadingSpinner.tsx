import { Oval } from 'react-loader-spinner';

function LoadingSpinner() {
  return (
    <div className="h-screen top-0 flex flex-col justify-center items-center">
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
