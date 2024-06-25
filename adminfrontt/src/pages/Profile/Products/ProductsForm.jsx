import React, { useState, useRef, useEffect } from 'react';
import { Modal, Tabs, Form, Input, Row, Col, message } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { SetLoader } from '../../../redux/loaderSlice';
import { addStop, updateStop } from '../../../apicall/businfo';


const { TabPane } = Tabs;

const rules = [
  {
    required: true,
    message: 'Required',
  },
];

function ProductsForm({
  showProductForm,
  setShowProductForm,
  selectedProduct,
  fetchData,
}) {
  const [selectedTab, setSelectedTab] = useState('1');
  const [addStopCalled, setAddStopCalled] = useState(false);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.users);
  // useEffect(() => {
  //   fetchData();
  // }, []);
  const onFinish = async (values) => {
    try {
      dispatch(SetLoader(true));
      let response = null;

      if (selectedProduct && selectedProduct._id ) {
        response = await updateStop(selectedProduct._id, values);
      } else {
        if (!addStopCalled) {
          if (user && user._id) {
            values.seller = user._id;
          }
     
          values.status = 'pending';
          response = await addStop(values);
          setAddStopCalled(true);
        }
      }
      dispatch(SetLoader(false));
      console.log('API Response:', response);

      if (response) {
        if (response.success) {
          message.success('Product saved successfully');
          fetchData();

          setShowProductForm(false);
        } else {
          console.error('API Error:', response.message);
          message.success(response.message || 'update successfully');
        }
      } else {
        console.error('API Response is null or undefined');
        message.error('API Response is null or undefined');
      }
    } catch (error) {
      dispatch(SetLoader(false));
      console.error('Error:', error);
      message.error(`Error: ${error.message}`);
    }
  };


  fetch('http://localhost:8000/api/stop/fetchStop')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

  const formRef = useRef(null);

  useEffect(() => {
    if (selectedProduct) {
      formRef.current.setFieldsValue(selectedProduct);
    }
  }, [selectedProduct]);

  useEffect(() => {
    if (!showProductForm) {
      setAddStopCalled(false);
    }
  }, [showProductForm]);

  return (
    <Modal
  title={selectedProduct ? 'updateStop' : 'addStop'}
  open={showProductForm}
  onCancel={() => setShowProductForm(false)}
  centered
  width={1000}
  okText="Save Information"
  onOk={() => formRef.current?.submit()}
  {...(selectedTab === "2" && { footer: false } )}
  
> 
<h1 className="text-primary text-2xl text-center font-semibolf uppercase">
          {selectedProduct ? "updateStop" : "addStop"}
        </h1>
  <Tabs
    defaultActiveKey="1"
    activeKey={selectedTab}
    onChange={(key) => setSelectedTab(key)}
  >
    <items key="1" title="General">
      <Form
       layout="vertical" 
       ref={formRef} 
       onFinish={onFinish}>
        
        <Form.Item label="Bus Number" name="busnumber" rules={rules}>
          <Input type="text" />
        </Form.Item>
        <Form.Item label="All Stops" name="allstops" rules={rules}>
          <TextArea type="text" />
        </Form.Item>
        <Row gutter={[16, 16]}>
          <Col span={8}>
            <Form.Item label="Route" name="route" rules={rules}>
              <Input type="text" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Total Stops" name="totalstops" rules={rules}>
              <Input type="number" />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </items>
  </Tabs>
</Modal>

  );
}

export default ProductsForm;










// import React, { useState, useRef, useEffect } from 'react';
// import { Form, Input, Row, Col, message, Select,Modal , Tabs } from 'antd';

// import TextArea from 'antd/es/input/TextArea';
// import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';
// import { SetLoader } from '../../../redux/loaderSlice'; 
// import { addStop, updateStop } from '../../../apicall/businfo';

// const rules = [
//   {
//     required: true,
//     message: "Required"
//   }
// ];
// function ProductsForm({
//   showProductForm,
//   setShowProductForm,
//   selectedProduct,
//   fetchData
// }) {
//  console.log="heeh"
//   const [addStopCalled, setAddStopCalled] = useState(false);
//   const dispatch = useDispatch()
//   const { user } = useSelector(state => state.users)
//   const onFinish = async (values) => {
//     try {
//             dispatch(SetLoader(true));
//             let response = null;
        
//             if (selectedProduct && selectedProduct._id) {
//               response = await updateStop(selectedProduct._id, values);
//             } else {
//               if (!addStopCalled) { // Check if addStop API has already been called
//                 values.seller = user && user._id;
//                 values.status = 'pending';
//                 response = await addStop(values);
//                 setAddStopCalled(true); // Set the flag to true after the API call
//               }
//             }
//             dispatch(SetLoader(false));
//             console.log('API Response:', response);
        
//             if (response) {
//               if (response.success) {
//                 // Check if the API response has a "success" field
//                 message.success('Product saved successfully');
//                 fetchData();
                
//                 setShowProductForm(false);
//               } else {
//                 console.error('API Error:', response.message);
//                 message.error(response.message || 'Failed to save product');
//               }
//             } else {
//               console.error('API Response is null or undefined');
//               message.error('API Response is null or undefined');
//             }
//           } catch (error) {
//             dispatch(SetLoader(false));
//             console.error('Error:', error); 
//             message.error(`Error: ${error.message}`);
//           }
//         };
//         const formRef = useRef(null);

//   useEffect(() => {
//     if (selectedProduct) {
//       formRef.current.setFieldsValue(selectedProduct)
//     }
//   }, [selectedProduct])

//   return (
//     <Modal
//       title={selectedProduct ? "updateStop" : "addStop"}
//       open={showProductForm}
//       onCancel={() => setShowProductForm(false)}
//       centered
//       width={1000}
//       okText="Save Product"
//       onOk={() => {
//         if (formRef.current) {
//           formRef.current.submit();
//         }
//       }}
      
     
//     >
//       <div>
//         <h1 className="text-primary text-2xl text-center font-semibolf uppercase">
//           {selectedProduct ? "Update Product" : "Add Product"}
//         </h1>
//         <Tabs key="1" title="General">
//         <Form layout="vertical" ref={formRef} onFinish={onFinish}>
//   <Form.Item label="Bus Number" name="busnumber" rules={rules}>
//     <Input type="text" />
//   </Form.Item>
//   <Form.Item label="All Stops" name="allstops" rules={rules}>
//     <TextArea type="text" />
//   </Form.Item>
//   <Row gutter={[16, 16]}>
//     <Col span={8}>
//       <Form.Item label="Route" name="route" rules={rules}>
//         <Input type="number" />
//       </Form.Item>
//     </Col>
//     <Col span={8}>
//       <Form.Item label="Total Stops" name="totalstops" rules={rules}>
//         <Input type="number" />
//       </Form.Item>
//     </Col>
//   </Row>
//             </Form>
          
     
//         </Tabs>
//       </div>
//     </Modal>
//   )
// }

// export default ProductsForm











