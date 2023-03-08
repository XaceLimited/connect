import type {
  OpenAPIClient,
  Parameters,
  OperationResponse,
  AxiosRequestConfig,
} from "openapi-client-axios";

declare namespace Components {
  namespace Schemas {
    /**
     * Account
     */
    export interface Account {
      xaid?: string;
      status?: string;
      type?: string;
      currency?: string;
      name?: string;
      accountNumber?: string;
      sortCode?: string;
      iban?: string;
      bic?: string;
      fullName?: string;
      companyName?: string;
      companyReg?: string;
      legalEntity?: string;
      isBusiness?: boolean;
      customerType?: string;
      displayName?: string;
      defaultAccount?: boolean;
      customerName?: string;
      externalReference?: string;
      createdDate?: string;
      subDefaultAccount?: string;
    }
    /**
     * Approval
     */
    export interface Approval {
      ref?: string;
      xtid?: string;
      parent_xaid?: string;
      status?: string;
      meta?: {
        approver_xid?: string;
        packet?: {
          amount?: string;
          currency?: string;
          payeeId?: string;
          reference?: string;
          transferType?: string;
          comparisonAmount?: number;
        };
      };
    }
    /**
     * Transaction
     */
    export interface Transaction {
      xaid?: string;
      xtid?: string;
      stream?: string;
      status?: string;
      name?: string;
      credit?: string;
      currency?: string;
      amount?: string;
      feeAmount?: string;
      totalAmount?: string;
      accountScheme?: string;
      paymentScheme?: string;
      paymentType?: string;
      transactionType?: string;
      tier?: string;
      legalEntity?: string;
      isFee?: string;
      hasFee?: string;
      feeForXtid?: string;
      feeXtid?: string;
      feeType?: string;
      feeCreatedDate?: string;
      isPayee?: string;
      xpid?: string;
      isAccountTransfer?: string;
      isXace?: string;
      fullName?: string;
      companyName?: string;
      companyReg?: string;
      sortCode?: string;
      accountNumber?: string;
      iban?: string;
      bic?: string;
      email?: string;
      phoneNumber?: string;
      birthDate?: string;
      addressLine1?: string;
      addressLine2?: string;
      townCity?: string;
      countyState?: string;
      postCode?: string;
      countryCode?: string;
      country?: string;
      region?: string;
      continent?: string;
      counterpartName?: string;
      counterpartSortCode?: string;
      counterpartAccountNumber?: string;
      counterpartIban?: string;
      counterpartBic?: string;
      counterpartAddressLine1?: string;
      counterpartAddressLine2?: string;
      counterpartTownCity?: string;
      counterpartCountyState?: string;
      counterpartPostCode?: string;
      counterpartCountryCode?: string;
      counterpartCountry?: string;
      counterpartRegion?: string;
      counterpartContinent?: string;
      counterpartEmail?: string;
      counterpartPhone?: string;
      counterpartDateOfBirth?: string;
      reference?: string;
      description?: string;
      transactionDate?: string;
      postedDate?: string;
      paymentCreatedDate?: string;
      reason?: string;
      accountName?: string;
      accountCurrency?: string;
      customerName?: string;
      externalReference?: string;
      paymentReference?: string;
      paymentStatus?: string;
    }
    /**
     * Payee
     */
    export interface Payee {
      xaid?: string;
      xpid?: string;
      name?: string;
      displayName?: string;
      reference?: string;
      sortCode?: string;
      accountNumber?: string;
      iban?: string;
      bban?: string;
      currency?: string;
      email?: string;
      mobilePhone?: string;
      payeeImage?: string;
      addressLine1?: string;
      addressLine2?: string;
      townCity?: string;
      countyState?: string;
      postCode?: string;
      country?: string;
      countryCode?: string;
      region?: string;
      continent?: string;
      isBusiness?: string;
      isDisplayed?: string;
      isDeleted?: string;
      bank?: string;
      bic?: string;
      payeeIntermediaryBic?: string;
      payeeIntermediaryAba?: string;
      payeeIntermediaryName?: string;
      payeeIntermediaryAddress1?: string;
      payeeIntermediaryAddress2?: string;
      payeeIntermediaryAddress3?: string;
      payeeIntermediaryTowncity?: string;
      payeeIntermediaryPostcode?: string;
      payeeIntermediaryCountry?: string;
      bankName?: string;
      bankBranch?: string;
      bankCode?: string;
      bankBranchCode?: string;
      bankAba?: string;
      bankAccountNumber?: string;
      bankClearingIdCode?: string;
      bankClearingMemberId?: string;
      bankAddressLine1?: string;
      bankAddressLine2?: string;
      bankTownCity?: string;
      bankCountyState?: string;
      bankPostcode?: string;
      bankCountry?: string;
      bankCountryCode?: string;
      bankWebsite?: string;
      bankEmail?: string;
      bankPhone?: string;
      intermediaryName?: string;
      intermediaryBic?: string;
      intermediaryAba?: string;
      intermediaryAddressLine1?: string;
      intermediaryAddressLine2?: string;
      intermediaryTownCity?: string;
      intermediaryCountyState?: string;
      intermediaryPostcode?: string;
      intermediaryCountry?: string;
      intermediaryCountryCode?: string;
    }
    /**
     * ErrorResponse
     */
    export interface ErrorResponse {
      statusCode?: number;
      message?:
      | "MISSING_AUTHORIZATION"
      | "TOKEN_VALIDATON_FAILED"
      | "USER_NOT_FOUND"
      | "ACCESS_DENIED"
      | "ACCESS_BLOCKED";
    }
  }
}
declare namespace Paths {
  namespace GetAccount {
    namespace Parameters {
      export type Xaid = string;
    }
    export interface PathParameters {
      xaid: Parameters.Xaid;
    }
    namespace Responses {
      export type $200 = /* Account */ Components.Schemas.Account;
      export type $500 = /* ErrorResponse */ Components.Schemas.ErrorResponse;
    }
  }
  namespace GetAccountApprovals {
    namespace Parameters {
      export type Limit = number;
      export type Page = number;
      export type Xaid = string;
    }
    export interface PathParameters {
      xaid: Parameters.Xaid;
    }
    export interface QueryParameters {
      page?: Parameters.Page;
      limit?: Parameters.Limit;
    }
    namespace Responses {
      export interface $200 {
        total?: number;
        results?: /* Approval */ Components.Schemas.Approval[];
      }
      export type $500 = /* ErrorResponse */ Components.Schemas.ErrorResponse;
    }
  }
  namespace GetAccountBalance {
    namespace Parameters {
      export type Xaid = string;
    }
    export interface PathParameters {
      xaid: Parameters.Xaid;
    }
    namespace Responses {
      /**
       * Returns object containing account currency, balance, available balance and pending balance.
       */
      export interface $200 {
        currency?: string;
        balance?: number;
        availableBalance?: number;
        pendingBalance?: number;
      }
      export type $500 = /* ErrorResponse */ Components.Schemas.ErrorResponse;
    }
  }
  namespace GetAccountPayees {
    namespace Parameters {
      export type Limit = number;
      export type Page = number;
      export type Xaid = string;
    }
    export interface PathParameters {
      xaid: Parameters.Xaid;
    }
    export interface QueryParameters {
      page?: Parameters.Page;
      limit?: Parameters.Limit;
    }
    namespace Responses {
      export interface $200 {
        total?: number;
        results?: /* Payee */ Components.Schemas.Payee[];
      }
      export type $500 = /* ErrorResponse */ Components.Schemas.ErrorResponse;
    }
  }
  namespace GetAccountTransactions {
    namespace Parameters {
      export type Limit = number;
      export type Page = number;
      export type Xaid = string;
    }
    export interface PathParameters {
      xaid: Parameters.Xaid;
    }
    export interface QueryParameters {
      page?: Parameters.Page;
      limit?: Parameters.Limit;
    }
    namespace Responses {
      export interface $200 {
        total?: number;
        results?: /* Transaction */ Components.Schemas.Transaction[];
      }
      export type $500 = /* ErrorResponse */ Components.Schemas.ErrorResponse;
    }
  }
  namespace GetAccounts {
    namespace Parameters {
      export type Limit = number;
      export type Page = number;
    }
    export interface QueryParameters {
      page?: Parameters.Page;
      limit?: Parameters.Limit;
    }
    namespace Responses {
      export interface $200 {
        total?: number;
        results?: /* Account */ Components.Schemas.Account[];
      }
      export type $500 = /* ErrorResponse */ Components.Schemas.ErrorResponse;
    }
  }
  namespace GetApproval {
    namespace Parameters {
      export type Ref = string;
    }
    export interface PathParameters {
      ref: Parameters.Ref;
    }
    namespace Responses {
      export type $200 = /* Approval */ Components.Schemas.Approval;
      export type $500 = /* ErrorResponse */ Components.Schemas.ErrorResponse;
    }
  }
  namespace GetApprovals {
    namespace Parameters {
      export type Limit = number;
      export type Page = number;
    }
    export interface QueryParameters {
      page?: Parameters.Page;
      limit?: Parameters.Limit;
    }
    namespace Responses {
      export interface $200 {
        total?: number;
        results?: /* Approval */ Components.Schemas.Approval[];
      }
      export type $500 = /* ErrorResponse */ Components.Schemas.ErrorResponse;
    }
  }
  namespace GetPayee {
    namespace Parameters {
      export type Xpid = string;
    }
    export interface PathParameters {
      xpid: Parameters.Xpid;
    }
    namespace Responses {
      export type $200 = /* Payee */ Components.Schemas.Payee;
      export type $500 = /* ErrorResponse */ Components.Schemas.ErrorResponse;
    }
  }
  namespace GetPayees {
    namespace Parameters {
      export type Limit = number;
      export type Page = number;
    }
    export interface QueryParameters {
      page?: Parameters.Page;
      limit?: Parameters.Limit;
    }
    namespace Responses {
      export interface $200 {
        total?: number;
        results?: /* Payee */ Components.Schemas.Payee[];
      }
      export type $500 = /* ErrorResponse */ Components.Schemas.ErrorResponse;
    }
  }
  namespace GetTransaction {
    namespace Parameters {
      export type Xtid = string;
    }
    export interface PathParameters {
      xtid: Parameters.Xtid;
    }
    namespace Responses {
      export type $200 = /* Transaction */ Components.Schemas.Transaction;
      export type $500 = /* ErrorResponse */ Components.Schemas.ErrorResponse;
    }
  }
  namespace GetTransactions {
    namespace Parameters {
      export type Limit = number;
      export type Page = number;
    }
    export interface QueryParameters {
      page?: Parameters.Page;
      limit?: Parameters.Limit;
    }
    namespace Responses {
      export interface $200 {
        total?: number;
        results?: /* Transaction */ Components.Schemas.Transaction[];
      }
      export type $500 = /* ErrorResponse */ Components.Schemas.ErrorResponse;
    }
  }
}

export interface OperationMethods {
  /**
   * getAccounts - Query paginated accounts.
   *
   * Returns items from **Accounts** collection - maximum `100` items per page.
   *
   * ### xace-connect example:
   *
   * ```const {data: {results, total}} = await client.getAccounts({page: 0, limit: 10});```
   */
  "getAccounts"(
    parameters?: Parameters<Paths.GetAccounts.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<Paths.GetAccounts.Responses.$200>;
  /**
   * getAccount - Query single account.
   *
   * Returns a single item from **Accounts** collection.
   *
   * ### xace-connect example:
   *
   * ```const {data: result} = await client.getAccount({xaid: ''});```
   */
  "getAccount"(
    parameters?: Parameters<Paths.GetAccount.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<Paths.GetAccount.Responses.$200>;
  /**
   * getAccountBalance - Query balance of an account.
   *
   * Returns **Balance* of specific **Account**
   *
   * ### xace-connect example:
   *
   * ```const {data: {results, total}} = await client.getAccountBalance({xaid: ''});```
   */
  "getAccountBalance"(
    parameters?: Parameters<Paths.GetAccountBalance.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<Paths.GetAccountBalance.Responses.$200>;
  /**
   * getApprovals - Query paginated Approvals.
   *
   * Returns items from **Approvals** collection - maximum `100` items per page.
   *
   * ### xace-connect example:
   *
   * ```const {data: {results, total}} = await client.getApprovals({page: 0, limit: 10});```
   */
  "getApprovals"(
    parameters?: Parameters<Paths.GetApprovals.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<Paths.GetApprovals.Responses.$200>;
  /**
   * getApproval - Query single Approval.
   *
   * Returns a single item from **Approvals** collection.
   *
   * ### xace-connect example:
   *
   * ```const {data: result} = await client.getApproval({ref: ''});```
   */
  "getApproval"(
    parameters?: Parameters<Paths.GetApproval.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<Paths.GetApproval.Responses.$200>;
  /**
   * getAccountApprovals - Query Approvals of an Account.
   *
   * Returns **Approvals* belonging to specific **Account**
   *
   * ### xace-connect example:
   *
   * ```const {data: {results, total}} = await client.getAccountApprovals({xaid: '', page: 0, limit: 10});```
   */
  "getAccountApprovals"(
    parameters?: Parameters<
      Paths.GetAccountApprovals.PathParameters &
      Paths.GetAccountApprovals.QueryParameters
    > | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<Paths.GetAccountApprovals.Responses.$200>;
  /**
   * getPayees - Query paginated Payees.
   *
   * Returns items from **Payees** collection - maximum `500` items per page.
   *
   * ### xace-connect example:
   *
   * ```const {data: {results, total}} = await client.getPayees({page: 0, limit: 10});```
   */
  "getPayees"(
    parameters?: Parameters<Paths.GetPayees.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<Paths.GetPayees.Responses.$200>;
  /**
   * getPayee - Query single Payee.
   *
   * Returns a single item from **Payees** collection.
   *
   * ### xace-connect example:
   *
   * ```const {data: result} = await client.getPayee({xpid: ''});```
   */
  "getPayee"(
    parameters?: Parameters<Paths.GetPayee.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<Paths.GetPayee.Responses.$200>;
  /**
   * getAccountPayees - Query Payees of an Account.
   *
   * Returns **Payees* belonging to specific **Account**
   *
   * ### xace-connect example:
   *
   * ```const {data: {results, total}} = await client.getAccountPayees({xaid: '', page: 0, limit: 10});```
   */
  "getAccountPayees"(
    parameters?: Parameters<
      Paths.GetAccountPayees.PathParameters &
      Paths.GetAccountPayees.QueryParameters
    > | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<Paths.GetAccountPayees.Responses.$200>;
  /**
   * getTransactions - Query paginated Transactions.
   *
   * Returns items from **Transactions** collection - maximum `500` items per page.
   *
   * ### xace-connect example:
   *
   * ```const {data: {results, total}} = await client.getTransactions({page: 0, limit: 10});```
   */
  "getTransactions"(
    parameters?: Parameters<Paths.GetTransactions.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<Paths.GetTransactions.Responses.$200>;
  /**
   * getTransaction - Query single Transaction.
   *
   * Returns a single item from **Transactions** collection.
   *
   * ### xace-connect example:
   *
   * ```const {data: result} = await client.getTransaction({xtid: ''});```
   */
  "getTransaction"(
    parameters?: Parameters<Paths.GetTransaction.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<Paths.GetTransaction.Responses.$200>;
  /**
   * getAccountTransactions - Query Transactions of an Account.
   *
   * Returns **Transactions* belonging to specific **Account**
   *
   * ### xace-connect example:
   *
   * ```const {data: {results, total}} = await client.getAccountTransactions({xaid: '', page: 0, limit: 10});```
   */
  "getAccountTransactions"(
    parameters?: Parameters<
      Paths.GetAccountTransactions.PathParameters &
      Paths.GetAccountTransactions.QueryParameters
    > | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<Paths.GetAccountTransactions.Responses.$200>;
}

export interface PathsDictionary {
  ["/accounts"]: {
    /**
     * getAccounts - Query paginated accounts.
     *
     * Returns items from **Accounts** collection - maximum `100` items per page.
     *
     * ### xace-connect example:
     *
     * ```const {data: {results, total}} = await client.getAccounts({page: 0, limit: 10});```
     */
    "get"(
      parameters?: Parameters<Paths.GetAccounts.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.GetAccounts.Responses.$200>;
  };
  ["/accounts/{xaid}"]: {
    /**
     * getAccount - Query single account.
     *
     * Returns a single item from **Accounts** collection.
     *
     * ### xace-connect example:
     *
     * ```const {data: result} = await client.getAccount({xaid: ''});```
     */
    "get"(
      parameters?: Parameters<Paths.GetAccount.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.GetAccount.Responses.$200>;
  };
  ["/accounts/{xaid}/balance"]: {
    /**
     * getAccountBalance - Query balance of an account.
     *
     * Returns **Balance* of specific **Account**
     *
     * ### xace-connect example:
     *
     * ```const {data: {results, total}} = await client.getAccountBalance({xaid: ''});```
     */
    "get"(
      parameters?: Parameters<Paths.GetAccountBalance.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.GetAccountBalance.Responses.$200>;
  };
  ["/approvals"]: {
    /**
     * getApprovals - Query paginated Approvals.
     *
     * Returns items from **Approvals** collection - maximum `100` items per page.
     *
     * ### xace-connect example:
     *
     * ```const {data: {results, total}} = await client.getApprovals({page: 0, limit: 10});```
     */
    "get"(
      parameters?: Parameters<Paths.GetApprovals.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.GetApprovals.Responses.$200>;
  };
  ["/approvals/{ref}"]: {
    /**
     * getApproval - Query single Approval.
     *
     * Returns a single item from **Approvals** collection.
     *
     * ### xace-connect example:
     *
     * ```const {data: result} = await client.getApproval({ref: ''});```
     */
    "get"(
      parameters?: Parameters<Paths.GetApproval.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.GetApproval.Responses.$200>;
  };
  ["/accounts/{xaid}/approvals"]: {
    /**
     * getAccountApprovals - Query Approvals of an Account.
     *
     * Returns **Approvals* belonging to specific **Account**
     *
     * ### xace-connect example:
     *
     * ```const {data: {results, total}} = await client.getAccountApprovals({xaid: '', page: 0, limit: 10});```
     */
    "get"(
      parameters?: Parameters<
        Paths.GetAccountApprovals.PathParameters &
        Paths.GetAccountApprovals.QueryParameters
      > | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.GetAccountApprovals.Responses.$200>;
  };
  ["/payees"]: {
    /**
     * getPayees - Query paginated Payees.
     *
     * Returns items from **Payees** collection - maximum `500` items per page.
     *
     * ### xace-connect example:
     *
     * ```const {data: {results, total}} = await client.getPayees({page: 0, limit: 10});```
     */
    "get"(
      parameters?: Parameters<Paths.GetPayees.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.GetPayees.Responses.$200>;
  };
  ["/payees/{xpid}"]: {
    /**
     * getPayee - Query single Payee.
     *
     * Returns a single item from **Payees** collection.
     *
     * ### xace-connect example:
     *
     * ```const {data: result} = await client.getPayee({xpid: ''});```
     */
    "get"(
      parameters?: Parameters<Paths.GetPayee.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.GetPayee.Responses.$200>;
  };
  ["/accounts/{xaid}/payees"]: {
    /**
     * getAccountPayees - Query Payees of an Account.
     *
     * Returns **Payees* belonging to specific **Account**
     *
     * ### xace-connect example:
     *
     * ```const {data: {results, total}} = await client.getAccountPayees({xaid: '', page: 0, limit: 10});```
     */
    "get"(
      parameters?: Parameters<
        Paths.GetAccountPayees.PathParameters &
        Paths.GetAccountPayees.QueryParameters
      > | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.GetAccountPayees.Responses.$200>;
  };
  ["/transactions"]: {
    /**
     * getTransactions - Query paginated Transactions.
     *
     * Returns items from **Transactions** collection - maximum `500` items per page.
     *
     * ### xace-connect example:
     *
     * ```const {data: {results, total}} = await client.getTransactions({page: 0, limit: 10});```
     */
    "get"(
      parameters?: Parameters<Paths.GetTransactions.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.GetTransactions.Responses.$200>;
  };
  ["/transactions/{xtid}"]: {
    /**
     * getTransaction - Query single Transaction.
     *
     * Returns a single item from **Transactions** collection.
     *
     * ### xace-connect example:
     *
     * ```const {data: result} = await client.getTransaction({xtid: ''});```
     */
    "get"(
      parameters?: Parameters<Paths.GetTransaction.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.GetTransaction.Responses.$200>;
  };
  ["/accounts/{xaid}/transactions"]: {
    /**
     * getAccountTransactions - Query Transactions of an Account.
     *
     * Returns **Transactions* belonging to specific **Account**
     *
     * ### xace-connect example:
     *
     * ```const {data: {results, total}} = await client.getAccountTransactions({xaid: '', page: 0, limit: 10});```
     */
    "get"(
      parameters?: Parameters<
        Paths.GetAccountTransactions.PathParameters &
        Paths.GetAccountTransactions.QueryParameters
      > | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.GetAccountTransactions.Responses.$200>;
  };
}

export type Client = OpenAPIClient<OperationMethods, PathsDictionary>;
