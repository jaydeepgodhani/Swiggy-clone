const CategoryItems = ({data}) => {
  return (
    <div>
      {data.map((item) => (
        <div key={item.key} className="p-2 m-2 border-gray-200 border-b-2 text-left">
          <div className="py-2">
            <span>{item.name}</span>
            <span> - Rs. {item.price}</span>
          </div>
          <p className="text-xs">item description goes here yo</p>
        </div>
      ))}
    </div>
  );
}

export default CategoryItems;