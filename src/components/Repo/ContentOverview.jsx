import React from 'react';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';
import { useGetFile } from '../../api/useGet';
import './Repo.css';

export default function ContentOverview({ fileEndPoint }) {
  const overviewContent = useGetFile(fileEndPoint);

  return (
    <div className="content2 border border-gold-dark  mb-6 px-6 py-4 rounded-md bg-homeGray-dark">
      <ReactMarkdown className="text-white flex justify-center pb-3 border-b border-gold-dark">{overviewContent.datas.name}</ReactMarkdown>
      <ReactMarkdown className="text-white px-2 break-words pt-3 text-justify">{overviewContent.datas.content}</ReactMarkdown>
    </div>
  );
}
ContentOverview.propTypes = {
  fileEndPoint: PropTypes.string,
};
