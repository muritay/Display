import React, {useState, useEffect} from 'react'

const ItemList = ({item,renderItem}) => {
    return (  
    <ul>
        {item.map((item,index) => (
            <li key={index}>{renderItem(item)}</li>
        ))}
    </ul>
    );
};

const DataFetcher = ({apiurl}) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async() => {
            try {
                const response = await fetch(apiurl);
                    if (!response, ok){
                        throw new Error ('HTTP error! status: ${response.status}');
                    }
                    const json = await response.json();
                    setData(json);
                    } catch (e) {
                        setError (e)
                    } finally {
                        setLoading(false)
                    }
        };
                fetchData();
            }, [apiurl]);

            if (loading) {
                return <p>Loading data...</p>
            }
            if (error) {
                return <p>Error: {error.message}</p>
            }

            const renderData = (item) => (
                <>
                <span>{item.name}</span>
                <span>({item.value})</span>
                </>
            );

            return (
                <dv>
                    <h1>Data from API</h1>
                    <ItemList items = {data} renderItem = {renderData} />
                </dv>
            );
        
};
 
export default DataFetcher;