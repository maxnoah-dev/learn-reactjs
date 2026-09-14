export default function TabButton({children, onAtiveModeFunc}) {
    return (
        <>
            <button onClick={onAtiveModeFunc}>{children}</button>
        </>
    );
}