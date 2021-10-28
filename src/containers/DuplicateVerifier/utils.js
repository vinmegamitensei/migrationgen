import * as _ from "lodash";
const hasInternalObject = (object) =>
  !!_.filter(object, (item) => typeof item === "object").length;

const extractMessagesToArray = (messagesObject) => {
  return _.reduce(
    messagesObject,
    (acc, messagesItem) => {
      if (hasInternalObject(messagesItem))
        return acc.concat(...extractMessagesToArray(messagesItem));
      const messagesToConcat =
        typeof messagesItem === "object"
          ? _.valuesIn(messagesItem)
          : [messagesItem];
      return acc.concat(...messagesToConcat);
    },
    []
  );
};

const generateMessagesCountObject = (messagesArray) => {
  const messageCounts = _.reduce(
    messagesArray,
    (acc, message) => {
      if (!acc[message]) {
        acc[message] = 1;
      } else {
        acc[message] += 1;
      }

      return acc;
    },
    {}
  );
  return messageCounts;
};

const getOnlyDuplicatesMessages = (counterObject) => {
  return _.reduce(
    counterObject,
    (acc, counter, key) => {
      if (counter > 1) {
        return { ...acc, [key]: counter };
      }
      return acc;
    },
    {}
  );
};

const findKeys = (value, messages, currentKey) => {
  return _.reduce(
    messages,
    (acc, messageItem, key) => {
      if (hasInternalObject(messageItem)) {
        return acc.concat(
          ...findKeys(value, messageItem, `${currentKey}.${key}`)
        );
      }
      if (typeof messageItem === "object") {
        const items = _.reduce(
          messageItem,
          (acc, message, keyMinor) => {
            if (message === value) {
              return {
                ...acc,
                [`${key}.${keyMinor}`]: message,
              };
            }
            return acc;
          },
          {}
        );
        if (_.size(items)) {
          const keysArrays = _.map(items, (_, key) => `${currentKey}.${key}`);
          return [...acc, ...keysArrays];
        }
      }
      if (messageItem === value) {
        return [...acc, `${currentKey}.${key}`];
      }

      return acc;
    },
    []
  );
};

const getDuplicatedKeys = (messagesObject, duplicatesObject, system) => {
  return _.reduce(
    duplicatesObject,
    (acc, _, key) => {
      return { ...acc, [key]: findKeys(key, messagesObject, system) };
    },
    {}
  );
};

const findDuplicatedMessages = (messagesObject) => {
  const messagesArray = extractMessagesToArray(messagesObject);
  const messagesCount = generateMessagesCountObject(messagesArray);
  return getOnlyDuplicatesMessages(messagesCount);
};

const findDuplicateMessageCodes = (messagesObject, system) => {
  const duplicates = findDuplicatedMessages(messagesObject);
  return getDuplicatedKeys(messagesObject, duplicates, system);
};

export { findDuplicateMessageCodes, findDuplicatedMessages };
