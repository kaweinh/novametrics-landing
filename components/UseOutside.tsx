import React from "react";

export function useOutsideHookBool(ref: React.RefObject<HTMLElement>, setter: React.Dispatch<React.SetStateAction<boolean>>, value: boolean ) {
    React.useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside( event: MouseEvent ) {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                const ignoredDiv = document.querySelector('.ignore-click');
                if (ignoredDiv && ignoredDiv.contains(event.target as Node)) {
                    return;
                }
                setter(value)
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}