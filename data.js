export const myData = [
  {
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    title: "Modern Dashboard",
    desc: "A clean and responsive dashboard interface for managing application data.",
  },
  {
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    title: "Developer Workspace",
    desc: "A modern workspace designed for developers to manage projects efficiently.",
  },
  {
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3",
    title: "Mobile Application",
    desc: "A simple mobile application interface with a clean and intuitive user experience.",
  },
  {
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    title: "Analytics Platform",
    desc: "An analytics platform for visualizing business metrics and performance.",
  },
];

export const EXAMPLES = {
  components: {
    title: "Components",
    desc: "Button và TabButton là các component dùng lại để tách giao diện và xử lý sự kiện.",
    code: `function Button({ children, onSelect }) {
  return <button onClick={onSelect}>{children}</button>;
}

<Button onSelect={increaseCount}>
  Tăng số đếm
</Button>`,
  },
  jsx: {
    title: "JSX",
    desc: "JSX cho phép kết hợp JavaScript với HTML để render nội dung động từ EXAMPLES.",
    code: `<div id="tab-content">
  <h3>{EXAMPLES[selectedTopic].title}</h3>
  <p>{EXAMPLES[selectedTopic].desc}</p>
</div>`,
  },
  props: {
    title: "Props",
    desc: "Props truyền dữ liệu và hàm xử lý từ App xuống Button hoặc TabButton.",
    code: `function TabButton({ children, onSelected }) {
  return (
    <button onClick={onSelected}>
      {children}
    </button>
  );
}`,
  },
  state: {
    title: "State",
    desc: "selectedTopic lưu tab hiện tại và khiến nội dung tương ứng được render lại sau mỗi lần click.",
    code: `const [selectedTopic, setSelectedTopic] = useState(
  "components",
);

function handleSelect(topic) {
  setSelectedTopic(topic);
}`, 
  },
};