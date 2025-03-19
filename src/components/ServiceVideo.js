import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

// Animation data for each service
const animations = {
    network: {
        container: 'networkAnimation',
        path: 'https://assets2.lottiefiles.com/packages/lf20_KUFdS6.json',
        description: 'Network infrastructure and setup animation'
    },
    security: {
        container: 'securityAnimation',
        path: 'https://assets9.lottiefiles.com/packages/lf20_yqxjhvv7.json',
        description: 'Cybersecurity protection animation'
    },
    cloud: {
        container: 'cloudAnimation',
        path: 'https://assets3.lottiefiles.com/packages/lf20_CTVGhE.json',
        description: 'Cloud services and data management'
    },
    support: {
        container: 'supportAnimation',
        path: 'https://assets5.lottiefiles.com/packages/lf20_qjosmr4w.json',
        description: 'IT support and management'
    }
};

const ServiceVideo = ({ service }) => {
    const animationContainer = useRef(null);
    const anim = useRef(null);

    useEffect(() => {
        if (animationContainer.current && animations[service]) {
            anim.current = lottie.loadAnimation({
                container: animationContainer.current,
                renderer: 'svg',
                loop: true,
                autoplay: true,
                path: animations[service].path,
            });

            // Cleanup on unmount
            return () => anim.current?.destroy();
        }
    }, [service]);

    return (
        <div
            ref={animationContainer}
            className="w-full h-48 bg-white rounded-lg shadow-sm"
            aria-label={animations[service]?.description}
            role="img"
        />
    );
};

export default ServiceVideo; 