 

export const AnimationData = {
    slideRight: {
        initial: { x: -100, opacity: 0 },
        whileInView: { x: 0, opacity: 1 },
        viewport: { once: true },
        transition: {
            duration: 1.5,
            delay: 0.4,
            ease: "easeInOut",
        },
    }, 
    slideLeft: {
        initial: { x:100, opacity: 0 },
        whileInView: { x: 0, opacity: 1 },
        viewport: { once: true },
        transition: {
            duration: 1.5,
            delay:0.4,
            ease: "easeInOut",
        },
    },
    slideUp: {
        initial: { y: 100, opacity: 0 },
        whileInView: { y: 0, opacity: 1 },
        viewport: { once: true },
        transition: {
            duration: 0.6,
            delay:0.1,
            ease: "easeInOut",
        },
    }, 

    slidDown: {
        initial: { y:-100, opacity: 0 },
        whileInView: { y: 0, opacity: 1 },
        viewport: { once: true },
        transition: {
            duration: 1.5,
            ease: "easeInOut",
        },
    },
    zoomInOut: {
        initial: { scale: 1 },
        whileHover: { scale: 1.08 },
        whileTap: { scale: 0.5 },
        transition: {
            duration: 0.5,
            ease: "easeInOut",
        }
    },
    popUp: {
        initial: { y: 50, opacity: 0 },
        whileInView: { y: 0, opacity: 1 },
        viewport: { once: true },
        transition: {
            duration: 0.5,
            delay: 0.1,
            ease: "easeInOut",
            type: 'spring'
        },
    },
    lightPopUp: {
        initial: { y: 20, opacity: 0 },
        whileInView: { y: 0, opacity: 1 },
        viewport: { once: true },
        transition: {
            duration: 1,
            delay: 0.3,
            ease: "easeInOut",
            type: 'spring'
        },
    },
    slideTopLeft: {
        initial: { y: 50, x: 50, opacity: 0 },
        whileInView: { y: 0, x: 0, opacity: 1 },
        viewport: { once: true },
        transition: {
            duration: 1.3,
            delay: 0.4,
            ease: "easeInOut",
            type: 'spring'
        },
    },
    rotateLeft: {
        initial: { rotate: 20, },
        whileInView: { rotate: 8 },
        viewport: { once: true },
        transition: {
            duration: 1.3,
            delay: 0.3,
            ease: "easeInOut",
            type: 'spring'
        },
    },
    rotateRight: {
        initial: { rotate: -10, },
        whileInView: { rotate: 0 },
        viewport: { once: true },
        transition: {
            duration: 1,
            delay: 0.3,
            ease: "easeInOut",
            type: 'spring',
        },
    },

};
