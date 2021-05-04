import React from 'react';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';
import { useGetFile } from '../../api/useGet';
import './Repo.css';

export default function ContentOverview({ fileEndPoint }) {
  const overviewContent = useGetFile(fileEndPoint);

  return (
    <div className="content2 border border-gold-dark  mb-6 px-6 py-4 rounded-md bg-homeGray-dark overflow-auto">
      <ReactMarkdown className="text-white flex justify-center mt-5  ">{overviewContent.datas.name}</ReactMarkdown>
      <hr className="border-gold-dark w-1/2 mx-auto my-10"/>
      <ReactMarkdown className="text-white px-2 break-words pt-3 text-justify overflow-auto">{overviewContent.datas.content}</ReactMarkdown>
      <hr className="border-gold-dark w-1/2 mx-auto my-10"/>
    </div>
  );
}
ContentOverview.propTypes = {
  fileEndPoint: PropTypes.string,
};
