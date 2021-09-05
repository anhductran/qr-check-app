import React, { Fragment } from 'react';
import { Layout } from 'antd';

import IconSearch from 'public/svg/IconSearch';
import IconScan from 'public/svg/IconScan';

import FormInput from 'components/FormItem/FormInput';
import FormSelect from 'components/FormItem/FormSelect';
import QrCheckButton from 'components/QrCheckButton';

const { Header } = Layout;

const languageOptions = [
  {
    name: 'English',
    value: 1,
  },
];

function HomeHeader() {
  return (
    <Header>
      <span className='title'>QR CHECK</span>
      <FormInput
        placeholder='Search for products'
        name='search'
        addonBefore={<FormSelect options={languageOptions} defaultValue={1} />}
        suffix={
          <Fragment>
            <IconSearch />
            Search
          </Fragment>
        }
      />
      <div className='button-group'>
        <QrCheckButton text='Scan' icon={<IconScan />} />
        <QrCheckButton text='Login' />
      </div>
    </Header>
  );
}

export default HomeHeader;
