import renderer from "react-test-renderer";

import AccountDetails from "../AccountDetails";

describe("<AccountDetails />", () => {
  it("renders", () => {
    expect(
      renderer.create(
        <AccountDetails
          account={{
            id: "account",
            amount: "1",
            locked: "1",
            storageUsage: 0,
            storagePaidAt: 1,
            inTransactionsCount: 0,
            outTransactionsCount: 0,
            createdAtBlockTimestamp: Number(new Date(2019, 1, 1)),
            createdByTransactionHash:
              "EVvWW1S9BFaEjY1JBNSdstb7ZTtTFjQ6cygkbw1KY4tL",
            accountIndex: 1234567890,
          }}
        />
      )
    ).toMatchSnapshot();
  });
});
