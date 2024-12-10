import DefaultIdea from "./DefaultIdea";

const defaultIdeas = [
  {
    idea: 'What is Bitcoin, and how does it work?',
    moreContext: 'How is Bitcoin different from regular money?',
  },
  {
    idea: 'Can you explain how crypto wallets work?',
    moreContext: 'How do crypto wallets store and secure coins?',
  },
  { idea: 'How does blockchain technology ensure security?', moreContext: 'How does blockchain keep data safe and secure?' },
  {
    idea: 'What are the top-performing cryptocurrencies this month?',
    moreContext: 'What are the top-performing cryptocurrencies this month?',
  },
];

export default function DefaultIdeas({ visible = true }) {
  return (
    <div className={`row1 ${visible ? "block" : "hidden"}`}>
      <DefaultIdea ideas={defaultIdeas.slice(0, 2)} />
      <DefaultIdea
        ideas={defaultIdeas.slice(2, 4)}
        myclassNames="hidden md:visible"
      />
    </div>
  );
}
