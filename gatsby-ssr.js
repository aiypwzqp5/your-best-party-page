const React = require("react");

const GlobalLayout = require("./src/components/templates/GlobalLayout/GlobalLayout").default;

exports.wrapPageElement = ({ element, props }) => {
    return <GlobalLayout {...props}>{element}</GlobalLayout>
}

exports.onRenderBody = ({ setHeadComponents }) => {
    setHeadComponents([
        <link
            rel="preload"
            href="/fonts/Roboto-Regular.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
            key="interFont"
        />,
        <link
            rel="preload"
            href="/fonts/Roboto-Light.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
            key="interFont"
        />,
        <link
            rel="preload"
            href="/fonts/Roboto-Bold.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
            key="interFont"
        />,
    ])
}