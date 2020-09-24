import React from "react";

export const Tabs: React.FC<{ initialTab?: string }> = (props) => {
  let children: React.ReactElement<TabProps>[] = React.Children.toArray(
    props.children
  ) as any;
  const [selectedTab, setSelectedTab] = React.useState(
    props.initialTab === null || props.initialTab === undefined
      ? -1
      : children.map((child) => child.props.title).indexOf(props.initialTab)
  );

  return (
    <>
      <section>
        {children.map((tab, idx) => (
          <button
            type="button"
            key={idx}
            onClick={(e) => {
              e.preventDefault();
              setSelectedTab(idx);
            }}
          >
            {tab.props.title}
          </button>
        ))}
      </section>
      <section>{children[selectedTab]}</section>
    </>
  );
};

interface TabProps {
  title: string;
}
export const Tab: React.FC<TabProps> = (props) => {
  return <>{props.children}</>;
};

function Client() {
  return (
    <div>
      <Tabs>
        <Tab title={"Tab 1"}>
          <div>world</div>
        </Tab>

        <Tab title={"Tab 2"}>
          <div>hello</div>
        </Tab>
      </Tabs>
    </div>
  );
}
