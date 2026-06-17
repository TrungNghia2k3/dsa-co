const Bullet = ({heading, bold = false, items = [], type = "ul", level = 0}) => {
    const ListTag = type === "ol" ? "ol" : "ul";
    
    // Different list styles for different nesting levels
    const getListStyle = (currentLevel) => {
        if (type === "ol") return "list-decimal";
        
        // For unordered lists, use different bullet styles based on level
        // level 0: disc, level 1: circle, level 2: square
        const styles = {
            0: "list-disc",
            1: "[&>li]:list-[circle]",
            2: "[&>li]:list-[square]"
        };
        return styles[currentLevel % 3] || "list-disc";
    };

    // Render a single item (can be a string or an object with sub-items)
    const renderItem = (item, index) => {
        // If item is a string, render it directly
        if (typeof item === "string") {
            return <li key={index} className="ml-0">{item}</li>;
        }
        
        // If item is an object with text and sub-items
        if (typeof item === "object" && item !== null) {
            return (
                <li key={index} className="ml-0">
                    {item.text}
                    {item.subItems && item.subItems.length > 0 && (
                        <Bullet 
                            items={item.subItems} 
                            type={type} 
                            level={level + 1}
                        />
                    )}
                </li>
            );
        }
        
        return null;
    };

    return (
        <>
            {heading && (
                <p className={`my-2 text-base ${bold ? "font-bold" : ""}`}>{heading}</p>
            )}
            <ListTag 
                className={`${getListStyle(level)} list-inside ${level === 0 ? 'mb-3' : 'ml-6 mt-2 mb-2'} space-y-2`}
                style={level === 1 ? {listStyleType: 'circle'} : level === 2 ? {listStyleType: 'square'} : {}}
            >
                {items.map((item, index) => renderItem(item, index))}
            </ListTag>
        </>
    );
};

export default Bullet;
