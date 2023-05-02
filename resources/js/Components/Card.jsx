import clsx from 'clsx';

const spacing = 'px-4 py-5 sm:p-6';
const extentionBaseClass = 'bg-gray-500 px-4 py-4 sm:px-6';

export default function Card({ children, className, header = null, footer = null, extensionClass }) {
    return (
        <div className={clsx('overflow-hidden rounded-sm bg-white shadow', className)}>
            {header != null && <div className={clsx(extentionBaseClass, extensionClass)}>{header}</div>}
            <div className={clsx(spacing)}>{children}</div>
            {footer != null && <div className={clsx(extentionBaseClass, extensionClass)}>{footer}</div>}
        </div>
    );
}
