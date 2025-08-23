import React from 'react';
import { FeatureCardWrapper } from './FeatureCardWrapper';

export const CodeSnippetCard: React.FC = () => {
  const codeSnippet = `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./IERC20.sol";

contract MyToken is IERC20 {
    string public name = "MyToken";
    string public symbol = "MT";
    uint256 public override totalSupply;
    mapping(address => uint256) public override balanceOf;
    mapping(address => mapping(address => uint256)) public override allowance;`;

  return (
    <FeatureCardWrapper
      title="Powerful APIs for developers"
      description="Seamless Integration for your company"
      className="relative"
    >
      <pre className="mt-4 p-4 bg-gray-50 rounded-lg text-xs font-mono text-gray-700 overflow-auto max-h-64">
        <code>{codeSnippet}</code>
      </pre>
    </FeatureCardWrapper>
  );
};