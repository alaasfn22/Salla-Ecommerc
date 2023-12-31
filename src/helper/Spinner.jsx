import { Button, Spinner } from "flowbite-react";

const LoadingSpinner = () => {
  return (
    <div className="flex mx-auto justify-center items-center py-12">
      <Button color="gray">
        <Spinner aria-label="Alternate spinner button example" size="sm" />
        <span className="pl-3">Loading...</span>
      </Button>
    </div>
  );
};

export default LoadingSpinner;
