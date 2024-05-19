export const homePageVariant = {
    hidden: {
        x: -100,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            delay: 0.5,
            when: "beforeChildren",
            staggerChildren: 0.5,
        },
    },
};
export const homeChildVariant = {
    hidden: {
        x: -50,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
    },
};

export const homeImgVariant = {
    hidden: {
        rotate: "-90deg",
        scale: 0,
    },
    visible: {
        rotate: "0",
        scale: 1,
    },
};

export const LayoutHeaderVariant = {
    hidden: {
        y: -100,
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
    },
}

export const headerPopUp = {
    hidden: {
        y: -50,
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
    },
}