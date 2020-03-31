import React from "react";
import PropTypes from "prop-types"; //타입 체크를 위해 사용
import styled from "styled-components";

const DetailPresenter = ({ result, loading, error }) => null;

DetailPresenter.propTypes = {
  result: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default DetailPresenter;
