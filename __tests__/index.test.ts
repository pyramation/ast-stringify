// @ts-nocheck
import { strip } from '../src';
const obj = {
  type: 'File',
  start: 0,
  end: 222,
  loc: {
    start: {
      line: 1,
      column: 0,
      index: 0
    },
    end: {
      line: 10,
      column: 4,
      index: 222
    }
  },
  errors: [],
  program: {
    type: 'Program',
    start: 0,
    end: 222,
    loc: {
      start: {
        line: 1,
        column: 0,
        index: 0
      },
      end: {
        line: 10,
        column: 4,
        index: 222
      }
    },
    sourceType: 'module',
    interpreter: null,
    body: [
      {
        type: 'ExportNamedDeclaration',
        start: 5,
        end: 217,
        loc: {
          start: {
            line: 2,
            column: 4,
            index: 5
          },
          end: {
            line: 9,
            column: 5,
            index: 217
          }
        },
        exportKind: 'value',
        specifiers: [],
        source: null,
        declaration: {
          type: 'VariableDeclaration',
          start: 12,
          end: 217,
          loc: {
            start: {
              line: 2,
              column: 11,
              index: 12
            },
            end: {
              line: 9,
              column: 5,
              index: 217
            }
          },
          declarations: [
            {
              type: 'VariableDeclarator',
              start: 18,
              end: 217,
              loc: {
                start: {
                  line: 2,
                  column: 17,
                  index: 18
                },
                end: {
                  line: 9,
                  column: 5,
                  index: 217
                }
              },
              id: {
                type: 'Identifier',
                start: 18,
                end: 26,
                loc: {
                  start: {
                    line: 2,
                    column: 17,
                    index: 18
                  },
                  end: {
                    line: 2,
                    column: 25,
                    index: 26
                  },
                  identifierName: 'messages'
                },
                name: 'messages'
              },
              init: {
                type: 'ObjectExpression',
                start: 29,
                end: 217,
                loc: {
                  start: {
                    line: 2,
                    column: 28,
                    index: 29
                  },
                  end: {
                    line: 9,
                    column: 5,
                    index: 217
                  }
                },
                properties: [
                  {
                    type: 'ObjectMethod',
                    start: 37,
                    end: 211,
                    loc: {
                      start: {
                        line: 3,
                        column: 6,
                        index: 37
                      },
                      end: {
                        line: 8,
                        column: 7,
                        index: 211
                      }
                    },
                    method: true,
                    key: {
                      type: 'Identifier',
                      start: 37,
                      end: 45,
                      loc: {
                        start: {
                          line: 3,
                          column: 6,
                          index: 37
                        },
                        end: {
                          line: 3,
                          column: 14,
                          index: 45
                        },
                        identifierName: 'joinPool'
                      },
                      name: 'joinPool'
                    },
                    computed: false,
                    kind: 'method',
                    id: null,
                    generator: false,
                    async: false,
                    params: [
                      {
                        type: 'Identifier',
                        start: 46,
                        end: 64,
                        loc: {
                          start: {
                            line: 3,
                            column: 15,
                            index: 46
                          },
                          end: {
                            line: 3,
                            column: 33,
                            index: 64
                          },
                          identifierName: 'value'
                        },
                        name: 'value',
                        typeAnnotation: {
                          type: 'TSTypeAnnotation',
                          start: 51,
                          end: 64,
                          loc: {
                            start: {
                              line: 3,
                              column: 20,
                              index: 51
                            },
                            end: {
                              line: 3,
                              column: 33,
                              index: 64
                            }
                          },
                          typeAnnotation: {
                            type: 'TSTypeReference',
                            start: 53,
                            end: 64,
                            loc: {
                              start: {
                                line: 3,
                                column: 22,
                                index: 53
                              },
                              end: {
                                line: 3,
                                column: 33,
                                index: 64
                              }
                            },
                            typeName: {
                              type: 'Identifier',
                              start: 53,
                              end: 64,
                              loc: {
                                start: {
                                  line: 3,
                                  column: 22,
                                  index: 53
                                },
                                end: {
                                  line: 3,
                                  column: 33,
                                  index: 64
                                },
                                identifierName: 'MsgJoinPool'
                              },
                              name: 'MsgJoinPool'
                            }
                          }
                        }
                      }
                    ],
                    body: {
                      type: 'BlockStatement',
                      start: 66,
                      end: 211,
                      loc: {
                        start: {
                          line: 3,
                          column: 35,
                          index: 66
                        },
                        end: {
                          line: 8,
                          column: 7,
                          index: 211
                        }
                      },
                      body: [
                        {
                          type: 'ReturnStatement',
                          start: 76,
                          end: 203,
                          loc: {
                            start: {
                              line: 4,
                              column: 8,
                              index: 76
                            },
                            end: {
                              line: 7,
                              column: 10,
                              index: 203
                            }
                          },
                          argument: {
                            type: 'ObjectExpression',
                            start: 83,
                            end: 202,
                            loc: {
                              start: {
                                line: 4,
                                column: 15,
                                index: 83
                              },
                              end: {
                                line: 7,
                                column: 9,
                                index: 202
                              }
                            },
                            properties: [
                              {
                                type: 'ObjectProperty',
                                start: 95,
                                end: 139,
                                loc: {
                                  start: {
                                    line: 5,
                                    column: 10,
                                    index: 95
                                  },
                                  end: {
                                    line: 5,
                                    column: 54,
                                    index: 139
                                  }
                                },
                                method: false,
                                key: {
                                  type: 'Identifier',
                                  start: 95,
                                  end: 102,
                                  loc: {
                                    start: {
                                      line: 5,
                                      column: 10,
                                      index: 95
                                    },
                                    end: {
                                      line: 5,
                                      column: 17,
                                      index: 102
                                    },
                                    identifierName: 'typeUrl'
                                  },
                                  name: 'typeUrl'
                                },
                                computed: false,
                                shorthand: false,
                                value: {
                                  type: 'StringLiteral',
                                  start: 104,
                                  end: 139,
                                  loc: {
                                    start: {
                                      line: 5,
                                      column: 19,
                                      index: 104
                                    },
                                    end: {
                                      line: 5,
                                      column: 54,
                                      index: 139
                                    }
                                  },
                                  extra: {
                                    rawValue:
                                      '/osmosis.gamm.v1beta1.MsgJoinPool',
                                    raw: "'/osmosis.gamm.v1beta1.MsgJoinPool'"
                                  },
                                  value: '/osmosis.gamm.v1beta1.MsgJoinPool'
                                }
                              },
                              {
                                type: 'ObjectProperty',
                                method: false,
                                key: {
                                  type: 'Identifier',
                                  name: 'value'
                                },
                                computed: false,
                                shorthand: false,
                                value: {
                                  type: 'CallExpression',
                                  callee: {
                                    type: 'MemberExpression',
                                    object: {
                                      type: 'CallExpression',
                                      callee: {
                                        type: 'MemberExpression',
                                        object: {
                                          type: 'Identifier',
                                          name: 'MsgJoinPool'
                                        },
                                        computed: false,
                                        property: {
                                          type: 'Identifier',
                                          name: 'encode'
                                        }
                                      },
                                      arguments: [
                                        {
                                          type: 'Identifier',
                                          name: 'value'
                                        }
                                      ]
                                    },
                                    computed: false,
                                    property: {
                                      type: 'Identifier',
                                      name: 'finish'
                                    }
                                  },
                                  arguments: []
                                }
                              }
                            ]
                          }
                        }
                      ],
                      directives: []
                    }
                  }
                ]
              }
            }
          ],
          kind: 'const'
        }
      }
    ],
    directives: []
  },
  comments: []
};

it('works', () => {
  expect(strip(obj)).toMatchSnapshot();
});
