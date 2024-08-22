import Button from "./Button.tsx";

const ButtonList = ({ data, setSelectedBtn, selectedBtn }) => {
  function renderItems() {
    return data.map((item) => (
      <div key={item.id}>
        <Button
          selectedBtn={selectedBtn}
          setSelectedBtn={setSelectedBtn}
          text={item.text}
          visible={selectedBtn.includes(item.text)}
        />
        {item.child?.length > 0 && (
          <ButtonList
            setSelectedBtn={setSelectedBtn}
            selectedBtn={selectedBtn}
            data={item.child}
          />
        )}
      </div>
    ));
  }

  return <div>{renderItems()}</div>;
};

export default ButtonList;
