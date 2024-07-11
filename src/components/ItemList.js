import { CLDN_IMG } from "../utils/Constants";

const ItemList = ({ items }) => {
    console.log(items);

    return (
        <div className="font-thin">
            <div className="flex flex-col text-left">
                {items.map((item) => (
                    <div className="border-b-2 py-4 flex flex-col md:flex-row md:justify-between md:items-center" key={item.card.info.id}>
                        <div className="flex flex-col md:flex-1">
                            <span className="p-2 text-base">{item.card.info.name}</span>
                            <span className="p-2 text-base">₹ {item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}</span>
                            <p className="p-2 text-xs text-gray-400">{item.card.info.description}</p>
                        </div>
                        <div className="mt-2 md:mt-0 md:ml-4 flex-shrink-0">
                        <div className="absolute">
                                <button className="bg-white text-green-400 p-0.2 font-semibold text-base rounded-sm">
                                    Add+
                                </button>
                                </div>
                            <img className="w-full md:w-24 h-auto md:h-24 object-cover rounded-md" src={CLDN_IMG + item.card.info.imageId} alt={item.card.info.name} />
                            
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ItemList;
