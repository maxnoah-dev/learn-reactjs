export default function TabButton({children, onSelected, handleHello}) {
    return (
        <>
            <button onClick={handleHello}>{children}</button>
        </>
    );
}