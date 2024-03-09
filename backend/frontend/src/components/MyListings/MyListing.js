import React, { useState, useEffect } from "react";
import "../../CSS/styles.css";
import YooniLogo from "../../objects/YooniLogo.png";
import NavigationBar from "../NavigationBar";
//import UploadButton from "./UploadButton";
import MyListingPost from "./MyListingPost";
import EditMyListing from "./EditMyListing";
import Login from "../Login";
//import { Card, Button, Container, Col, Row} from "react-bootstrap";
import axios from 'axios'


const IsEditing=() => {
    const [items, setItems] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    const [editingItemId, setEditingItemId] = useState(null);

    const userDataString = localStorage.getItem("userData"); 
    const userData = JSON.parse(userDataString); // Parse the string into a JavaScript object
    console.log(userData);


    const handleEditClick = (itemId) => {
        setEditingItemId(itemId);

    };


    useEffect(() => {
        console.log(searchQuery);

        const fetchData = async () => {
          try {
            // Make a GET request to your backend endpoint
            const response = await axios.get("/api/myitems", {
              params: { searchQuery: userData.id } // Pass searchQuery value directly
            });
            setItems(response.data);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
    
        fetchData();
        console.log(searchQuery)
      }, [searchQuery]);
    
    // function checkImage() {

    // }

    return(

        <>
            {items.map(item => (
                <MyListingPost
                    key={item.id}
                    image={item.image}
                    price={item.price}
                    title={item.title}
                    description={item.description}
                    category={item.category}
                    item_id={item.id}
                    is_editing={editingItemId === item.id}
                    onEditClick={() => handleEditClick(item.id)}
                />
            ))}

        </>

    );
};

const MyListing = () => {

    return(
        <>
            <NavigationBar />
            <br />
            <br />
            <br />     
            <IsEditing />
                      
        </>
    );

};

export default MyListing;

