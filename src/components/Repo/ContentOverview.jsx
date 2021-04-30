import React from 'react';
import PropTypes from 'prop-types';
import { useGetFile } from '../../api/useGet';

export default function ContentOverview({ fileEndPoint }) {
  const overviewContent = useGetFile(fileEndPoint);

  return (
    <div className="w-full border border-white">
      <p className="text-white">{overviewContent.datas.name}</p>
      <p className="text-white">{overviewContent.datas.content}</p>
    </div>
  );
}
ContentOverview.propTypes = {
  fileEndPoint: PropTypes.string,
};
