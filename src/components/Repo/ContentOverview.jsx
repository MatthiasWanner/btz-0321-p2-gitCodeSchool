import React from 'react';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';
import { useGetFile } from '../../api/useGet';

export default function ContentOverview({ fileEndPoint }) {
  const overviewContent = useGetFile(fileEndPoint);

  return (
    <div className="w-80 border border-gold-dark  mb-6 px-6 py-4 rounded-md md:ml-2w-full">
      <ReactMarkdown className="text-white flex justify-center pb-4 border-b-2">{overviewContent.datas.name}</ReactMarkdown>
      <ReactMarkdown className="text-white px-2 break-words pt-2 text-justify">{overviewContent.datas.content}</ReactMarkdown>
    </div>
  );
}
ContentOverview.propTypes = {
  fileEndPoint: PropTypes.string,
};
