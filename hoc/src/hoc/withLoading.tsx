import { ComponentType } from "react";

const withLoading = <P extends object>(WrappedComponent: ComponentType<P>) => {
    return (
        props: P & {
            isLoading: boolean;
        }
    ) => {
        const { isLoading } = props;

        return isLoading ? <div>Loading...</div> : <WrappedComponent {...props} />;
    };
};

export default withLoading;
