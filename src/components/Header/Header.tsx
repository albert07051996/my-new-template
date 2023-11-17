import { Button, Col, Dropdown, Input, MenuProps, Modal, Row, Select } from 'antd';
import './index.css';
import pngwing from '../../assets/images/pngwing.png'
import georgiaFlag from '../../assets/images/georgiaFlag.svg'
import use from '../../assets/images/use.png'
import ru from '../../assets/images/ru.png'
import user from '../../assets/images/user.png'
import {
    changeLanguageState
} from '../../redux/slices/languageSlice';
import { useAppDispatch, useAppSelector } from '../../hooks';
import React, { useState, useEffect } from 'react';


export const Header = () => {

    const dispatch = useAppDispatch();
    const { Search } = Input;
    const [locale, setLocale] = React.useState("en");
    const languageStory = useAppSelector(state => state.languageStory);
    const [data, setdata] = React.useState<any>({ name: '', value: '' });
    const changeLanguage = (e: any, name: string) => {
        console.log(e)
        let k = { name: name, value: e };
        dispatch(changeLanguageState(k));
    }
    const [open, setOpen] = useState(false);

    const showModal = () => {
      setOpen(true);
    };
    const handleOk = () => {
      setOpen(false);
    };
  
    const handleCancel = () => {
      setOpen(false);
    };
    const items: MenuProps['items'] = [
        {
          key: '1',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
              1st menu item
            </a>
          ),
        },
        {
          key: '2',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
              2nd menu item
            </a>
          ),
        },
        {
          key: '3',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
              3rd menu item
            </a>
          ),
        },
      ];

    useEffect(() => {
        console.log(languageStory, 'languageStorylanguageStory')
    }, [languageStory.language]);

    return (
        < >
         <Modal
        open={open}
        title="Title"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={(_, { OkBtn, CancelBtn }) => (
          <>
            <Button>Custom Button</Button>
            <CancelBtn />
            <OkBtn />
          </>
        )}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
            <div className='Header'>
                <Row className='topHeader '>
                    <Col xs={4}
                        sm={4}
                        md={4}
                        lg={4}
                        xl={5}
                        xxl={3}>
                        <img alt="example" src={pngwing} height={"63px"} width={"63px"} />
                    </Col>
                    <Col xs={6}
                        sm={6}
                        md={6}
                        lg={6}
                        xl={6}
                        xxl={8}>
                        <Search placeholder="input search text" className='marginTop'
                            // onSearch={onSearch}
                            enterButton />
                    </Col>
                    <Col xs={6}
                        sm={6}
                        md={6}
                        lg={6}
                        xl={6}
                        xxl={8}>
                        <Select className='marginTop LanguageSize'
                            value={languageStory.language}
                            onChange={e => changeLanguage(e, 'language')}
                            style={{ marginLeft: 10, width: 140 }}>
                            <Select.Option value="ka"><img alt="example" src={georgiaFlag} height={"15px"} width={"18px"} /> ქა
                            </Select.Option>
                            <Select.Option value="en"><img alt="example" src={use} height={"15px"} width={"18px"} /> En</Select.Option>
                            {/* <Select.Option value="ru"><img alt="example" src={ru} height={"15px"} width={"18px"} />Ру</Select.Option> */}
                        </Select>
                    </Col>
                    <Col xs={6}
                        sm={6}
                        md={6}
                        lg={8}
                        xl={5}
                        xxl={4}>
                        <div className='marginTop WhiteColor'>
                            <Button type="text" className='WhiteColor' >{languageStory.signIn}</Button>/<Button className='WhiteColor' type="text" onClick={showModal}>{languageStory.login}</Button>
                            {/* <img alt="example"  src={user} height={"25px"} width={"25px"} /> */}

                        </div>
                    </Col>
                </Row>
            </div>
            <div className='HeaderLine'>

            </div>
            <div className='SecondHeader'>
                <div className='center-div'>
                    <Row >
                        <Col xs={24}
                            sm={24}
                            md={24}
                            lg={24}
                            xl={24}
                            xxl={24}>
                                 {/* <Dropdown menu={{ items }} placement="bottom">
                                 <Button className='Button marginTopButtons' ghost>
                                {languageStory.computersOffice} </Button>
      </Dropdown> */}

<div className="dropdown">
  <button className="dropbtn">{languageStory.computersOffice}</button>
  <div className="dropdown-content">

   <button>es</button>  <button>es</button>
  <a href="#">Link 2</a>
  <a href="#">Link 3</a>
  </div>
</div>
<div className="dropdown">
  <button className="dropbtn">{languageStory.phonesCommunications}</button>
  <div className="dropdown-content1">

   <button>2</button>  <button>es</button>
  <a href="#">Link 2</a>
  <a href="#">Link 3</a>
  </div>
</div>

                            <Button className='Button marginTopButtons' ghost>
                                {languageStory.computersOffice} </Button>
                            {/* </Col> */}
                            {/* <Col xs={4}
                            sm={4}
                            md={8}
                            lg={8}
                            xl={8}
                            xxl={8}> */}
                            {/* <Button className='Button marginTopButtons' ghost>{
                                languageStory.phonesCommunications}</Button>
                            <Button className='Button marginTopButtons' ghost>{
                                languageStory.phonesCommunications}</Button> */}
                                {/* <Button className='Button marginTopButtons' ghost>{
                                languageStory.phonesCommunications}</Button> */}
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    );
};
