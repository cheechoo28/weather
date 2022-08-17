import {FunctionComponent} from "react";
import {ILayoutProps} from "./Layout.props";
import LocationWeatherCard from "./LocationWeatherCard/LocationWeatherCard";


const Layout = ({ children }: ILayoutProps): JSX.Element => {
    return (
        <>
            <LocationWeatherCard />
            <div>{children}</div>
        </>
    );
};

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
    return function withLayoutComponent(props: T): JSX.Element {
        return (
            <Layout>
                <Component {...props} />
            </Layout>
        );
    };
};