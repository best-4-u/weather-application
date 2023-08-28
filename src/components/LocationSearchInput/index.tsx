import React from "react";
import Downshift from "downshift";
import styles from "./LocationSearchInput.module.scss";


const q = [{ value: 'asdasd' }];

function LocationSearchInput() {

  return (
    <Downshift
      onChange={(selection) =>
        alert(selection ? `You selected ${selection.value}` : 'Selection Cleared')
      }
      itemToString={(item) => (item ? item.value : '')}
    >
      {({
        getInputProps,
        getItemProps,
        getMenuProps,
        getRootProps,
        inputValue,
        highlightedIndex,
        selectedItem,
        isOpen,
      }) => (
        <div {...getRootProps()} className={styles.search_combobox}>
          <input {...getInputProps()} className={styles.input} />
          <div style={{ position: 'relative' }}>
            <ul {...getMenuProps()} className={styles.menu}>
              {isOpen &&
                q
                  .filter((item) => !inputValue || item.value.includes(inputValue))
                  .map((item, index) => (
                    <li
                      {...getItemProps({
                        key: `${item.value}${index}`,
                        item,
                        index,
                        style: {
                          backgroundColor:
                            highlightedIndex === index ? 'lightgray' : 'white',
                          fontWeight: selectedItem === item ? 'bold' : 'normal',
                        },
                      })}
                    >
                      {item.value}
                    </li>
                  ))}
            </ul>
          </div>

        </div>
      )}
    </Downshift>
  );
}


export default LocationSearchInput;
